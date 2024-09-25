const Job = require('../models/job.model.js');
const Category = require('../models/category.model.js');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
// const User = require('../models/user.model.js');

//create
const createJob = asyncHandler(async (req, res) => {

    const JobData = {
        name: req.body.name || null,
        salary: req.body.salary || 0,
        description: req.body.description || null,
        company: req.body.company || null,
        images: req.body.images,
        img: req.body.img || null,
        id_cat: req.body.id_cat || null,
        // author: req.author || null
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
        Job: await nuevoTrabajo.toJobResponse()
    })
});

//findALL
const findAllJob = asyncHandler(async (req, res) => {

    let query = {};
    let transUndefined = (varQuery, otherResult) => {
        return varQuery != "undefined" && varQuery ? varQuery : otherResult;
    };

    // let limit = transUndefined(req.query.limit, 3);
    // let offset = transUndefined(req.query.offset, 0);
    let category = transUndefined(req.query.category, "");
    let name = transUndefined(req.query.name, "");
    let company = transUndefined(req.query.company, "");
    let salary_min = transUndefined(req.query.salary_min, 0);
    let salary_max = transUndefined(req.query.salary_max, Number.MAX_SAFE_INTEGER);
    let nameReg = new RegExp(name);
    // let favorited = transUndefined(req.query.favorited, null);
    // let id_user = req.auth ? req.auth.id : null;

    query = {
        name: { $regex: nameReg },
        $and: [{ salary: { $gte: salary_min } }, { salary: { $lte: salary_max } }],
    };

    if (category != "") {
        query.id_cat = category;
    }

    // if (favorited) {
    //     const favoriter = await User.findOne({ username: favorited });
    //     query._id = { $in: favoriter.favorites };
    // }

    const jobs = await Job.find(query);
    const Job_count = await Job.find(query).countDocuments();

    return res.json(jobs)

    if (!jobs) {
        res.status(404).json({ msg: "Falló" });
    }

    // const user = await User.findById(req.userId);

    // return res.json(user)

    return res.status(200).json({
        jobs: await Promise.all(jobs.map(async Job => {
            return await Job.toJobResponse();
        })), Job_count: Job_count
    });
});

//findONE
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

//DELETE ONE
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

// Obtener todos los trabajos por slug de categoría
const getJobsByCategorySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const category = await Category.findOne({ slug }).populate('jobs').exec();

    if (!category) {
        return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    return res.status(200).json({ jobs: category.jobs });
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


// const favouriteJob = asyncHandler(async (req, res) => {

//     const id = req.userId;

//     const { slug } = req.params;

//     const loginUser = await User.findById(id).exec();

//     if (!loginUser) {
//         return res.status(401).json({
//             message: "User Not Found"
//         });
//     }

//     const Job = await Job.findOne({ slug }).exec();

//     if (!Job) {
//         return res.status(401).json({
//             message: "Job Not Found"
//         });
//     }

//     await loginUser.favorite(Job._id);

//     // return res.json(loginUser);
//     const updatedJob = await Job.updateFavoriteCount();

//     // return res.json(updatedJob);

//     return res.status(200).json({
//         Job: await updatedJob.toJobResponse(loginUser)
//     });
// });

// const unfavoriteJob = asyncHandler(async (req, res) => {

//     const id = req.userId;

//     const { slug } = req.params;

//     const loginUser = await User.findById(id).exec();

//     if (!loginUser) {
//         return res.status(401).json({
//             message: "User Not Found"
//         });
//     }

//     const Job = await Job.findOne({ slug }).exec();

//     if (!Job) {
//         return res.status(401).json({
//             message: "Job Not Found"
//         });
//     }

//     await loginUser.unfavorite(Job._id);

//     await Job.updateFavoriteCount();

//     return res.status(200).json({
//         Job: await Job.toJobResponse(loginUser)
//     });
// });

//UPDATE
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

module.exports = {
    createJob,
    findAllJob,
    findOneJob,
    deleteOneJob,
    GetjobsByCategory,
    getJobsByCategorySlug,
    // favouriteJob,
    // unfavoriteJob,
    updateJob
}