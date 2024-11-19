import React from "react";
import Steps from "../../ui/Steps";
import StepSectionPhone from "../../ui/StepsPhone";

export default function GiudeSction() {
  return (
    <div id="giude" className="mb-4">
      <div className="custom-guide-first text-light text-center py-4">
        <div className="container-xxl" data-aos="fade-up">
          <h2 className="fs-0"> فارسی سازها چگونه کار میکنند؟ </h2>
          <div className="mt-4" />
          <div className="custom-divider mx-auto"></div>
          <div className="custom-oranged mb-4" />
          <div className="">
            <p> شما به سادگی میتوانید در 5 مرحله بازی خود را فارسی کنید. </p>
          </div>
        </div>
      </div>
      <Steps />
      <StepSectionPhone />
    </div>
  );
}
