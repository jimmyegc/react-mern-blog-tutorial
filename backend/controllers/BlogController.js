import BlogModel from "../models/BlogModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    // const blogs = await BlogModel.findAll(); // MySQL
    const blogs = await BlogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    /* 
    // MySQL
    const blog = await BlogModel.findAll({
      where: { id: req.params.id },
    }); */
    const id = req.params.id;
    await BlogModel.findById({ _id: id }).then((blog) => {
      res.status(200).json(blog);
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    // await BlogModel.create(req.body); // MySQL
    await BlogModel.create(req.body);
    res.status(200).json({
      message: "Blog creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    /* 
    // MySQL 
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    }); */
    const id = req.params.id;
    await BlogModel.updateOne({ _id: id }, req.body).then((response) => {
      console.log(response);
      res.status(200).json({
        message: "Blog actualizado correctamente",
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    /* 
    // MySQL
    await BlogModel.destroy({
      where: { id: req.params.id },
    }); */
    const id = req.params.id;
    await BlogModel.deleteOne({
      _id: req.params.id,
    }).then((res) => {
      console.log(res);
    });
    res.status(200).json({
      message: "Blog eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
