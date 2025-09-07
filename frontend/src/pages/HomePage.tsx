import { LinkButton } from "../components/LinkButton";

export const HomePage = () => {
  return(
    <div className="flex justify-center items-center h-screen">
      <LinkButton link="https://online.ntnu.no/" color="green">Kontakt oss</LinkButton>
    </div>
  );
};