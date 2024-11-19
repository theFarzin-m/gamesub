import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utility/helpers";
import {
  add,
  remove,
  increase,
  decrease,
  startUpdating,
} from "../../features/cart/cartSlice";
import { HiOutlineTrash } from "react-icons/hi";

export default function Informations({ data }) {
  const { cart, isLoading } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const { id, title, mainImage, price } = data[0];
  const isInCart = cart.filter((c) => c.id === id);

  let scrollY = 0;
  const scrollHandel = () => {
    const pin = document.querySelector(".card");
    const scroller = document.querySelector(".custom-information");

    // @ts-ignore
    const end = scroller.offsetHeight - pin.offsetHeight - 50;
    scrollY = window.scrollY;
    if (scrollY <= end) {
      // @ts-ignore
      pin.style.transform = `translateY(${scrollY}px)`;
    }
  };

  useEffect(() => {
    if (isInCart.length > 0 && !isLoading) {
      setQuantity(isInCart[0].quantity);
    } else {
      setQuantity(0);
    }

    const imagePlace = document.querySelector("#image-place");
    if (data[0].mainImage && imagePlace) {
      imagePlace.style.backgroundImage = `url(${mainImage})`;
    }
    if (window.innerWidth > 768) {
      document.addEventListener("scroll", scrollHandel);
    }

    return () => {
      document.removeEventListener("scroll", scrollHandel);
    };
  }, [isInCart]);

  const handelAddToCart = () => {
    setQuantity(1);

    dispatch(add({ id, title, mainImage, price, quantity: 1 }));
  };

  const handelIncrease = () => {
    dispatch(startUpdating());

    setQuantity((q) => q + 1);

    dispatch(increase({ id }));
  };

  const handelDecrease = () => {
    dispatch(startUpdating());

    setQuantity((q) => q - 1);

    dispatch(decrease({ id }));
  };

  const handelRemove = () => {
    setQuantity(0);
    dispatch(remove(id));
  };

  return (
    <div className="container-xl pt-4">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col col-md-4 custom-add-cart mb-4 mb-md-0">
          <div className="card w-100">
            <div className="custom-image-place" id="image-place"></div>
            <div className="card-body px-3">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                با استفاده از این برنامه میتوانید بازی {title} را به فارسی ترجمه
                کرده و آن را با زیرنویس فارسی تجربه کنید.
              </p>
              <div className="row align-items-center px-2">
                {quantity > 0 ? (
                  <div className="custom-quantity-button d-flex justify-content-center align-items-center border col mx-2 rounded">
                    {quantity == 1 ? (
                      <button
                        className="btn col-3 text-light"
                        onClick={handelRemove}
                      >
                        <HiOutlineTrash />
                      </button>
                    ) : (
                      <button
                        className="btn col-3 text-light "
                        onClick={handelDecrease}
                      >
                        -
                      </button>
                    )}
                    <span className="col text-center">{quantity}</span>
                    <button
                      className="btn col-3 text-light"
                      onClick={handelIncrease}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn btn-primary pb-2 col"
                    onClick={handelAddToCart}
                  >
                    <i className="bi bi-cart4 mx-2"></i>
                    افزودن
                  </button>
                )}
                <div className="col custom-price text-end fw-bold p-0">
                  {formatCurrency(price)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col custom-information">
          <div className="h2">توضیحات</div>
          <p>
            با استفاده از این برنامه میتوانید بازی God of War Ragnarok را به
            فارسی ترجمه کرده و آن را با زیرنویس فارسی تجربه کنید.
          </p>
          <p>&nbsp;</p>
          <p>نسخه های آینده:</p>
          <ul>
            <li>
              اضافه شدن ترجمه متن های غیر زیرنویس بازی اصلی و دی ال سی valhalla.
            </li>
            <li>رفع ایرادات یافت شده.</li>
          </ul>
          <p>&nbsp;</p>
          <p>قابلیت های فارسی ساز نسخه 00:94 بتا:</p>
          <ul>
            <li>فارسی سازی تمامی زیرنویس های بازی اصلی و دی ال سی valhalla.</li>
          </ul>
          <p>&nbsp;</p>
          <p>راهنمای نصب فارسی ساز God of War Ragnarok:</p>
          <p>
            قبل از شروع نصب فارسی ساز از نصب بودن برنامه&nbsp;
            <a href="https://soft98.ir/software/programming/3134-visual-c-2.html">
              Visual C++
            </a>
            ، قرار گرفتن پوشه بازی در لیست سفید آنتی ویروس و وصل بودن به اینترنت
            مطمئن شوید.
          </p>
          <p>
            برنامه نصب فارسی ساز را اجرا کرده و محل نصب بازی را انتخاب کنید.
          </p>
          <p>
            بازی را اجرا کرده و شماره سریالی که پس از خرید برای شما ارسال شده
            است را وارد کنید.
          </p>
          <p>
            وارد بازی شده و از تنظیمات زبان متن را به English (United States)
            تغییر داده و زیرنویس را روشن کنید.
          </p>
          <p>از بازی لذت ببرید.</p>
          <p>&nbsp;</p>
          <p>نسخه ی هماهنگ کامپیوتر:</p>
          <p>هماهنگ با تمامی نسخه ها.</p>
          <p>تست شده با نسخه ElAmigos.</p>
          <p>&nbsp;</p>
          <p>توصیه ها و راهنمای حل مشکلات فارسی ساز God of War Ragnarok:</p>
          <p>
            همیشه آخرین نسخه فارسی ساز را از قسمت “دانلودها” در پنل کاربری خود
            در سایت دانلود کنید چرا که بسیاری از مشکلات یافت شده با هر آپدیت
            برطرف میشود.
          </p>
          <p>
            احتمال حذف خودکار فایل های فارسی ساز توسط سیستم امنیتی ویندوز یا
            آنتی ویروس ها وجود دارد. به همین خاطر بهتر است پوشه بازی را به لیست
            سفید این قبیل نرم افزارها اضافه کنید و سپس اقدام به نصب فارسی ساز
            کنید. اگر با نحوه انجام اینکار آشنا نیستید، میتوانید از یکی از این
            سه آموزش تصویری کمک بگیرید:&nbsp;
            <a href="https://www.aparat.com/v/3147N">ویندوز دیفندر</a>
            &nbsp;–&nbsp;
            <a href="https://www.aparat.com/v/kNM3x">نود 32</a>
            &nbsp;–&nbsp;
            <a href="https://www.aparat.com/v/xeGfM">کسپرسکی</a>
          </p>
          <p>
            نصب ماد روی بازی، پتچ و استفاده از نرم افزارهایی ثانوی مانند ترینر و
            MSI Afterburner ممکن است باعث درست عمل نکردن فارسی ساز شود. توصیه
            میشود قبل از استفاده از فارسی ساز تمام نرم افزارهای اضافه روی
            کامپیوتر بسته باشد.
          </p>
          <p>
            مجموعه نرم افزارهای&nbsp;VC++ پیش نیاز فارسی ساز است و اگر از به روز
            بودن آن مطمئن نیستید، بهتر است آن را از&nbsp;
            <a href="https://soft98.ir/software/programming/3134-microsoft-visual-c-redistributable.html">
              اینجا
            </a>
            &nbsp;دانلود و نصب کنید. سپس بعد از نصب کامپیوتر خود را ری استارت
            کرده و فارسی ساز را نصب کنید.
          </p>
          <p>
            اگر این توضیحات به شما کمکی در حل مشکل نکرد، میتوانید از طریق ربات
            تلگرام گیم ساب&nbsp;
            <a href="https://t.me/gamesub_support_bot">Gamesub_Support_Bot</a>
            &nbsp;به شکل دقیق تری به بررسی مشکل و راه حل های آن بپردازید و در
            صورتی که به نتیجه نرسید، با مسئول پشتیبانی ارتباط برقرار کنید.
          </p>
          <p>&nbsp;</p>
          <p>نکاتی درباره شماره سریال:</p>
          <p>
            برای فعال سازی فارسی ساز با استفاده از شماره سریال، در دفعه اول نیاز
            به اینترنت دارید اما بعد از اتمام فعال سازی میتوانید برای همیشه از
            فارسی ساز به صورت آفلاین استفاده کنید.
          </p>
          <p>
            شماره سریالی که پس از خرید برای شما ارسال میشود تنها روی ۲ کامپیوتر
            متفاوت قابل استفاده است.&nbsp;نصب فارسی ساز روی این دو کامپیوتر
            میتواند به دفعات نامحدودی صورت گیرد و حذف بازی یا تغییر ویندوز مشکلی
            در اینباره به وجود نمیاورد.
          </p>
          <p>
            شماره سریال باید به همراه خط فاصله ها و بدون هیچ اسپیس یا کاراکتر
            اضافه ی دیگری وارد شود. همچنین محض اطمینان بهتر از به صورت دستی
            شماره سریال را تایپ کنید تا کاراکتر ناخواسته اضافه ای حین کپی کردن
            وارد نشود.
          </p>
          <p>
            اگر پس از نصب فارسی ساز بازی هربار از شما شماره سریال را میپرسد،
            یکبار بازی را به حالت run as administrator اجرا کنید تا این مشکل حل
            شود.
          </p>
          <p>
            برای دریافت شماره سریال خود پس از خرید محصول همیشه میتوانید به قسمت
            “شماره سریال ها” در پنل کاربری خودتان در سایت مراجعه کنید.
          </p>
          {/* <div dangerouslySetInnerHTML={{ __html: intro }} /> */}
        </div>
      </div>
    </div>
  );
}
