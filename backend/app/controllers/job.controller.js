const Job = require('../models/job.model.js');
const Category = require("../models/category.model.js");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model.js");

// #region CREATE JOB
const createJob = asyncHandler(async (req, res) => {

    const JobData = {
        name: req.body.name || null,
        salary: req.body.salary || 0,
        description: req.body.description || null,
        company: req.body.company || null,
        images: req.body.images,
        img: req.body.img || null,
        id_cat: req.body.id_cat || null,
    };

    const id_cat = req.body.id_cat;

    const category = await Category.findOne({ id_cat }).exec();

    if (!category) {
        //importante este "return", así si no encuentra la categoría a la que pertenece el job se sale y no lo crea
        return res.status(400).json({ message: "Ha ocurrido un error al buscar la categoria. No se ha creado el trabajo." });
    }

    const nuevoTrabajo = await new Job(JobData);
    await nuevoTrabajo.save();

    if (!nuevoTrabajo) {
        return res.status(400).json({ message: "Ha ocurrido un error al crear el trabajo." });
    }

    await category.addJob(nuevoTrabajo._id);

    return res.status(200).json({
        Job: await nuevoTrabajo.toJobResponse(),
    });
});

// #region LIST ALL JOBS
const findAllJob = asyncHandler(async (req, res) => {

    let query = {};
    let transUndefined = (varQuery, otherResult) => {
        return varQuery != "undefined" && varQuery ? varQuery : otherResult;
    };

    let limit = transUndefined(req.query.limit, 3);
    let offset = transUndefined(req.query.offset, 0);
    let category = transUndefined(req.query.category, "");
    let name = transUndefined(req.query.name, "");
    let salary_min = transUndefined(req.query.salary_min, 0);
    let salary_max = transUndefined(req.query.salary_max, Number.MAX_SAFE_INTEGER);
    let nameReg = new RegExp(name);
    let favorited = transUndefined(req.query.favorited, null);
    // let id_user = req.auth ? req.auth.id : null;

    query = {
        name: { $regex: nameReg },
        $and: [{ salary: { $gte: salary_min } }, { salary: { $lte: salary_max } }],
    };

    if (category != "") {
        query.id_cat = category;
    }

    // Obtener el usuario si está logueado
    let user = null;
    if (req.loggedin) {
        try {
            user = await User.findById(req.userId);
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
        }
    }
    const jobs = await Job.find(query).limit(Number(limit)).skip(Number(offset));
    const Job_count = await Job.find(query).countDocuments();

    // return res.json(jobs)

    if (!jobs) {
        res.status(404).json({ msg: "Falló" });
    }

    // const user = await User.findById(req.userId);

    // return res.json(user)

    return res.status(200).json({
        jobs: await Promise.all(jobs.map(async job => {
            return await job.toJobResponse(user);
        })), Job_count: Job_count
    });
});

// #region DETAILS
// const findOneJob = async (req, res) => {
//     try {
//         console.log('User ID:', req.userId); // Verificar el userId
//         console.log('Logged in:', req.loggedin); // Verificar si el usuario está logueado

//         const job = await Job.findOne({ slug: req.params.slug }).exec();
//         console.log('Job encontrado en el backend:', job); // Verificar el job
//         if (!job) {
//             return res.status(404).json({ message: 'Job not found' });
//         }

//         if (req.loggedin) {
//             const user = await User.findById(req.userId).exec();
//             console.log('User encontrado en el backend:', user); // Verificar el user
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }

//             const favorited = user.favoriteJob.includes(job._id);

//             const jobResponse = {
//                 slug: job.slug,
//                 name: job.name,
//                 salary: job.salary,
//                 description: job.description,
//                 company: job.company,
//                 id_cat: job.id_cat,
//                 img: job.img,
//                 images: job.images,
//                 favorited: favorited,
//                 favoritesCount: job.favoritesCount || 0,
//             };

//             console.log('Job response:', jobResponse); // Verificar el jobResponse
//             return res.status(200).json({ job: jobResponse });
//         } else {
//             const jobResponse = {
//                 slug: job.slug,
//                 name: job.name,
//                 salary: job.salary,
//                 description: job.description,
//                 company: job.company,
//                 id_cat: job.id_cat,
//                 img: job.img,
//                 images: job.images,
//                 favorited: false,
//                 favoritesCount: job.favoritesCount || 0,
//             };

//             console.log('Job response (no user):', jobResponse); // Verificar el jobResponse
//             return res.status(200).json({ job: jobResponse });
//         }
//     } catch (error) {
//         console.error('Error al obtener el job en el backend:', error);
//         res.status(500).json({ message: 'Error retrieving job', error });
//     }
// };

const findOneJob = async (req, res) => {
    try {
        const job = await Job.findOne({ slug: req.params.slug }).exec();
        console.log('Job encontrado en el backend:', job); // Verifica el job aquí
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        console.error('Error al obtener el job en el backend:', error);
        res.status(500).json({ message: 'Error retrieving job', error });
    }
};

// #region DELETE ONE
const deleteOneJob = asyncHandler(async (req, res) => {
    // return res.json("holaaa");
    const slug = req.params;

    // res.send(slug);
    const job = await Job.findOne(slug).exec();
    // res.send(Job);

    if (!job) {
        res.status(400).json({ message: "Trabajo no encontrado" });
    }

    const id_cat = job.id_cat
    // res.send(id_cat);
    const category = await Category.findOne({ id_cat }).exec();

    if (!category) {
        res.status(400).json({ message: "Ha ocurrido un error" });
    }

    await job.deleteOne({ _id: job._id });
    await category.removeJob(job._id)
    return res.status(200).json({
        message: "Trabajo eliminado"
    });
});

// #region GET JOBS BY CATEGORY SLUG
const getJobsByCategorySlug = asyncHandler(async (req, res) => {

    // res.json("holaaa")
    let offset = 0;
    let limit = 3;
    const slug = req.params;
    let Job_count = "";

    const category = await Category.findOne(slug).exec();

    if (!category) {
        res.status(400).json({ message: "Categoria no encontrada" });
    }

    const user = await User.findById(req.userId);
    return await res.status(200).json({
        jobs: await Promise.all(category.jobs.map(async jobId => {
            const jobObj = await Job.findById(jobId).skip(offset).limit(limit).exec();
            return await jobObj.toJobResponse(user);
        })),
        Job_count: Job_count
    })
});

const GetjobsByCategory = asyncHandler(async (req, res) => {
    const slug = req.params.slug; // Asegúrate de obtener el slug correctamente
    let Job_count = "";

    const category = await Category.findOne({ slug }).exec();

    if (!category) {
        return res.status(400).json({ message: "Categoria no encontrada" });
    }

    const jobs = await Promise.all(category.jobs.map(async JobId => {
        const Trabajobj = await Job.findById(JobId).exec();
        return Trabajobj.toJobResponse();
    }));

    return res.status(200).json({
        jobs: jobs,
        Job_count: jobs.length // Actualiza el conteo de trabajos
    });
});

// #region UPDATE JOB
const updateJob = asyncHandler(async (req, res) => {
    const jobData = req.body;
    const { slug } = req.params;

    try {
        const target = await Job.findOne({ slug }).exec();

        if (!target) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        if (jobData.name) {
            target.name = jobData.name;
        }
        if (jobData.description) {
            target.description = jobData.description;
        }
        if (jobData.salary) {
            target.salary = jobData.salary;
        }
        if (jobData.company) {
            target.company = jobData.company;
        }
        if (jobData.images) {
            target.images = jobData.images;
        }
        if (jobData.img) {
            target.img = jobData.img;
        }
        if (jobData.id_cat) {
            target.id_cat = jobData.id_cat;
        }
        if (jobData.slug) {
            target.slug = jobData.slug;
        }

        await target.save();
        return res.status(200).json({
            job: target.toJobResponse()
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error updating job",
            error: error.message
        });
    }
});

// #region FAVORITE
const favoriteJob = asyncHandler(async (req, res) => {
    const id = req.userId;
    const { slug } = req.params;
    const loginUser = await User.findById(id).exec();
    if (!loginUser) {
        return res.status(401).json({
            message: "Usuario no encontrado",
        });
    }
    const job = await Job.findOne({ slug }).exec();
    if (!job) {
        return res.status(401).json({
            message: "Trabajo no encontrado",
        });
    }
    await loginUser.favorite(job._id);
    const updatedJob = await job.updateFavoriteCount();
    return res.status(200).json({
        job: await updatedJob.toJobResponse(loginUser),
    });
});

// #region UNFAVORITE
const unfavoriteJob = asyncHandler(async (req, res) => {
    const id = req.userId;
    const { slug } = req.params;
    const loginUser = await User.findById(id).exec();
    if (!loginUser) {
        return res.status(401).json({
            message: "Usuario no encontrado",
        });
    }
    const job = await Job.findOne({ slug }).exec();
    if (!job) {
        return res.status(401).json({
            message: "Trabajo no encontrado",
        });
    }
    await loginUser.unfavorite(job._id);
    await job.updateFavoriteCount();
    return res.status(200).json({
        job: await job.toJobResponse(loginUser),
    });
});

module.exports = {
    createJob,
    findAllJob,
    findOneJob,
    deleteOneJob,
    GetjobsByCategory,
    getJobsByCategorySlug,
    favoriteJob,
    unfavoriteJob,
    updateJob
}