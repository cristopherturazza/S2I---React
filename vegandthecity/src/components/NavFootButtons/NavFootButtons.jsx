import { useNavigate, useParams } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleUp } from "react-icons/fa";
import { useEffect } from "react";

export default function NavFootButtons() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <div className="nav-foot-buttons-container">
        <div
          className="nav-foot-button pr-8"
          onClick={() => {
            if (id) {
              navigate(-1);
            } else {
              navigate("/", {
                replace: true,
              });
            }
          }}
        >
          <FaChevronCircleLeft className="text-4xl mr-4" />
          Back
        </div>
        <div
          className="nav-foot-button pl-8"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top
          <FaChevronCircleUp className="text-4xl ml-4" />
        </div>
      </div>
    </>
  );
}
