import React from "react";
import { useForm } from "react-hook-form";

export default function EditeProfile() {
  const { register, handleSubmit, reset } = useForm();
  return (
    <form
      id="edite-profile"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className=" mb-3 form-floating">
        <input
          type="text"
          id="firstName"
          className="form-control mt-2"
          placeholder="نام"
          {...register("firstName", {
            required: "نام نمیتواند خالی باشد",
          })}
        />
        <label
          className="form-label w-100  custom-required"
          htmlFor="firstName"
        >
          نام:
        </label>
      </div>
      <div className=" mb-3 form-floating">
        <input
          type="text"
          id="lastName"
          className="form-control mt-2"
          placeholder="نام خانوادگی"
          {...register("lastName", {
            required: "This field is required",
          })}
        />
        <label className="form-label w-100 custom-required" htmlFor="lastName">
          نام خانوادگی:
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input
          type="text"
          id="displayName"
          className="form-control mt-2"
          placeholder="نام نمایشی"
          {...register("displayName", {
            required: "This field is required",
            minLength: 6,
          })}
        />
        <label className="form-label w-100 custom-required">نام نمایشی:</label>
        <small className="text-secondary">
          اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.
        </small>
      </div>

      <div className="mb-3 form-floating">
        <input
          type="email"
          id="email"
          className="form-control mt-2"
          placeholder="آدرس ایمیل:"
          {...register("email", {
            required: "This field is required",
          })}
        />
        <label className="form-label w-100 custom-required" htmlFor="email">
          آدرس ایمیل:
        </label>
      </div>

      <fieldset className="border rounded p-4">
        <legend>
          <span className="p-3 fs-5">تغییر گذرواژه</span>
        </legend>
        <div className="mb-3 form-floating">
          <input
            type="password"
            id="password"
            className="form-control mt-2"
            placeholder="گذرواژه قدیمی"
            {...register("password")}
          />
          <label className="form-label w-100" htmlFor="password">
            گذرواژه پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
          </label>
        </div>

        <div className="mb-3 form-floating">
          <input
            type="password"
            id="newPassword"
            className="form-control mt-2"
            placeholder="گذرواژه جدید"
            {...register("newPassword")}
          />
          <label className="form-label w-100" htmlFor="newPassword">
            گذرواژه جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
          </label>
        </div>

        <div className="mb-3 form-floating">
          <input
            type="password"
            id="confirmation"
            className="form-control mt-2"
            placeholder="تکرار گذرواژه جدید"
            {...register("confirmation")}
          />
          <label className="form-label w-100" htmlFor="confirmation">
            تکرار گذرواژه جدید
          </label>
        </div>
      </fieldset>

      <div className="mt-3">
        <button className="btn btn-primary me-3 fw-bold" type="submit">
          ذخیره تغییرات
        </button>
        <button className="btn btn-outline-secondary fw-bold" type="reset">
          پاک کردن
        </button>
      </div>
    </form>
  );
}
