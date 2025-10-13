import { useState } from "react";

export default function PlayGame() {
  const [isPressed, setIsPressed] = useState(false);

  // fungsi untuk handle button klakson
  const handlePressStartKlakson = () => {
    setIsPressed(true);
    console.log("Klakson ON 🚗");
    if (!isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah ditekan, menunggu dilepas...");
    }
  };
  const handlePressEndKlakson = () => {
    setIsPressed(false);
    console.log("Klakson OFF ");
    // hentikan sinyal ke ESP32 di sini
    if (isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah dilepas, menunggu ditekan...");
    }
  };

  // fungsi untuk handle button kiri
  const handlePressStartKiri = () => {
    setIsPressed(true);
    console.log("Kiri ON 🚗");
    if (!isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah ditekan, menunggu dilepas...");
    }
  };
  const handlePressEndKiri = () => {
    setIsPressed(false);
    console.log("Kiri OFF ");
    // hentikan sinyal ke ESP32 di sini
    if (isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah dilepas, menunggu ditekan...");
    }
  };

  // fungsi untuk handle button kanan
  const handlePressStartKanan = () => {
    setIsPressed(true);
    console.log("kanan ON 🚗");
    if (!isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah ditekan, menunggu dilepas...");
    }
  };
  const handlePressEndKanan = () => {
    setIsPressed(false);
    console.log("kanan OFF ");
    // hentikan sinyal ke ESP32 di sini
    if (isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah dilepas, menunggu ditekan...");
    }
  };

  // fungsi untuk handle button atas
  const handlePressStartAtas = () => {
    setIsPressed(true);
    console.log("Atas ON 🚗");
    if (!isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah ditekan, menunggu dilepas...");
    }
  };
  const handlePressEndAtas = () => {
    setIsPressed(false);
    console.log("Atas OFF ");
    // hentikan sinyal ke ESP32 di sini
    if (isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah dilepas, menunggu ditekan...");
    }
  };

  // fungsi untuk handle button bawah
  const handlePressStartBawah = () => {
    setIsPressed(true);
    console.log("Bawah ON 🚗");
    if (!isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah ditekan, menunggu dilepas...");
    }
  };
  const handlePressEndBawah = () => {
    setIsPressed(false);
    console.log("Bawah OFF ");
    // hentikan sinyal ke ESP32 di sini
    if (isPressed) {
      // kirim sinyal ke ESP32 di sini
    } else {
      console.log("Tombol sudah dilepas, menunggu ditekan...");
    }
  };
  return (
    <div>
      <div className="text-4xl font-bold text-white mb-8 absolute top-20 left-1/2 transform -translate-x-1/2">
        <div>Control the RC Car</div>
      </div>

      {/* button klakson */}
      <button
        onTouchStart={handlePressStartKlakson}
        onTouchEnd={handlePressEndKlakson}
        onMouseDown={handlePressStartKlakson}
        onMouseUp={handlePressEndKlakson}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className=" border rounded-full h-32 w-32 flex justify-center items-center bg-white  absolute top-30 right-10 transform -translate-x-1/2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M525.2 82.9C536.7 88 544 99.4 544 112L544 528C544 540.6 536.7 552 525.2 557.1C513.7 562.2 500.4 560.3 490.9 552L444.3 511.3C400.7 473.2 345.6 451 287.9 448.3L287.9 544C287.9 561.7 273.6 576 255.9 576L223.9 576C206.2 576 191.9 561.7 191.9 544L191.9 448C121.3 448 64 390.7 64 320C64 249.3 121.3 192 192 192L276.5 192C338.3 191.8 397.9 169.3 444.4 128.7L491 88C500.4 79.7 513.9 77.8 525.3 82.9zM288 384L288 384.2C358.3 386.9 425.8 412.7 480 457.6L480 182.3C425.8 227.2 358.3 253 288 255.7L288 384z" />
          </svg>
        </div>
      </button>

      {/* button up-arrow */}
      <button
        onTouchStart={handlePressStartAtas}
        onTouchEnd={handlePressEndAtas}
        onMouseDown={handlePressStartAtas}
        onMouseUp={handlePressEndAtas}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className=" border rounded-full h-32 w-32 flex justify-center items-center bg-white absolute top-30 left-20 transform -translate-x-1/2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="120"
            width="120"
            viewBox="0 0 640 640"
          >
            <path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" />
          </svg>
        </div>
      </button>

      {/* button down-arrow */}
      <button
        onTouchStart={handlePressStartBawah}
        onTouchEnd={handlePressEndBawah}
        onMouseDown={handlePressStartBawah}
        onMouseUp={handlePressEndBawah}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className=" border rounded-full h-32 w-32 flex justify-center items-center bg-white absolute top-64 left-20 transform -translate-x-1/2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out rotate-x-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="120"
            width="120"
            viewBox="0 0 640 640"
          >
            <path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" />
          </svg>
        </div>
      </button>

      {/* button left-arrow */}
      <button
        onTouchStart={handlePressStartKiri}
        onTouchEnd={handlePressEndKiri}
        onMouseDown={handlePressStartKiri}
        onMouseUp={handlePressEndKiri}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className=" border rounded-full h-32 w-32 flex justify-center items-center bg-white absolute top-64 right-30 transform -translate-x-1/2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out -rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="120"
            width="120"
            viewBox="0 0 640 640"
          >
            <path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" />
          </svg>
        </div>
      </button>

      {/* button right-arrow */}
      <button
        onTouchStart={handlePressStartKanan}
        onTouchEnd={handlePressEndKanan}
        onMouseDown={handlePressStartKanan}
        onMouseUp={handlePressEndKanan}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className=" border rounded-full h-32 w-32 flex justify-center items-center bg-white absolute top-64 -right-10 transform -translate-x-1/2 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="120"
            width="120"
            viewBox="0 0 640 640"
          >
            <path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
