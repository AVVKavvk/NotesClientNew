import React from "react";
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5907813750741424"
     crossorigin="anonymous"></script>
function Book() {
  const array = [
    {
      sem_name: "Sem1",
      link: "https://drive.google.com/drive/folders/1z2PXahFpUjuqZaH8aF4plBKEfe69EwsF?usp=drive_link",
    },
    {
      sem_name: "Sem2",
      link: "https://drive.google.com/drive/folders/1BqfDsYHTQW5xTkxtJ4GCQ7Fmkpi0hio7?usp=drive_link",
    },
    {
      sem_name: "Sem3",
      link: "https://drive.google.com/drive/folders/1tKY5FdV53GHiy4-4mCBEein02o2oJ6io?usp=drive_link",
    },
    {
      sem_name: "Sem4",
      link: "https://drive.google.com/drive/folders/1I4VY-AMe2c6tmTpe3m6_GDdWbokTe5iv?usp=drive_link",
    },
    {
      sem_name: "Sem5",
      link: "https://drive.google.com/drive/folders/1xA_TY_hHsq6yx9Rc_tQ4zzmXyO0s3WIQ?usp=drive_link",
    },
  ];
  return (
    <div class="flex flex-col mx-auto mt-10 justify-center mb-7 max-w-[14500px] items-center  ">
    
      <div class="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 gap-7 px-3 mx-auto justify-center items-center ">
        {array?.map(item => {
          return (
            <a href={item?.link} target="_blank"
              style={{
                boxShadow:
                  "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
              }}
              class=" w-[250px] h-[200px] bg-gray-400 border  rounded-lg flex justify-center items-center mx-auto text-justify"
            >
              <a href={item?.link} target="_blank" class="text-3xl p-5 ">
                {" "}
                {item?.sem_name}
              </a>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Book;

{
  /* <iframe src="https://drive.google.com/file/d/1fJNv3helu8odkuGWwYs_C6qtKXCcc9Bh/preview" width="100%" height="500px" frameborder="0"></iframe> */
}
