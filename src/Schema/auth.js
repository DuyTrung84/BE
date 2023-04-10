import joi from "joi";

export const singupSchema = joi.object({
    firstName: joi.string().required().messages({
        "string.empty": "Trường \Họ\ không được để trống",
        "any.required": "Trường \Họ\ là bắt buộc"
    }),
    lastName: joi.string().required().messages({
        "string.empty": "Trường \Tên\ không được để trống",
        "any.required": "Trường \Tên\ là bắt buộc"
    }),
    email: joi.string().email().required().messages({
        "string.empty": "Trường \email\ không được để trống",
        "string.email": "Trường \email\ không đúng định dạng",
        "any.required": "Trường \email\ là bắt buộc"
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Trường \password\ không được để trống",
        "string.min": "Trường \password\ không đúng định dạng",
        "any.required": "Trường \password\ là bắt buộc"
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "Trường \confirmPassword\ không được để trống",
        "any.required": "Trường \confirmPassword\ là bắt buộc",
        "any.only": "Trường \confirmPassword\ không khớp",
    }),

});

export const singinSchema = joi.object({

    email: joi.string().email().required().messages({
        "string.empty": "Trường \email\ không được để trống",
        "string.email": "Trường \email\ không đúng định dạng",
        "any.required": "Trường \email\ là bắt buộc"
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Trường \password\ không được để trống",
        "string.min": "Trường \password\ không đúng định dạng",
        "any.required": "Trường \password\ là bắt buộc"
    }),

});