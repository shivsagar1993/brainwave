import { companyLogos } from "../constants";

const CompnyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className=" tagline mb-6 text-center text-n-1/15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        possimus, exped
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className=" flex items-center justify-center flex-1 h-[]8.5rem"
            key={index}
          >
            <img src={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompnyLogo;
