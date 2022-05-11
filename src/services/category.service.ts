import axiosService from "./axios.service";

const getAllCategories = () => {
  return axiosService.get("/category")
  .then((res) => {
      return res.data
  })
  .catch((err) => {
      return err
  })
};

const getAllFaq = () => {
    return axiosService.get("/category/faq")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export const categoryService = {
    getAllCategories,
    getAllFaq
}
