import Uni_img1 from "../../assets/img/uni/Uni_img1.png";
import Uni_img2 from "../../assets/img/uni/Uni_img2.png";
import Uni_img3 from "../../assets/img/uni/Uni_img3.png";
import Uni_img4 from "../../assets/img/uni/Uni_img4.png";
import Uni_img5 from "../../assets/img/uni/Uni_img5.png";
import Uni_img6 from "../../assets/img/uni/Uni_img6.png";

const TrustLogos = () => (
  <section className="py-10 px-4 flex flex-col gap-6 bg-white">
    <div className="text-[#646464] text-2xl font-semibold">
      Our Students Have Been Admitted To Top Universities
    </div>
    <div className="flex flex-wrap justify-center items-center gap-14 full">
      {[Uni_img1, Uni_img2, Uni_img3, Uni_img4, Uni_img5, Uni_img6].map(
        (img, idx) => (
          <div
            key={idx}
            className="w-36 h-20 flex items-center justify-center"
          >
            <img
              src={img}
              alt={`university-${idx}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )
      )}
    </div>
  </section>
);

export default TrustLogos;