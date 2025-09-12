export const AboutUsPage = () => {
  return(
    <div className="relative flex flex-col justify-center items-center content-between gap-12">
      <h1 className="self-start text-6xl pl-5 md:self-center md:text-center md:p-0">Hvem er <br /><b>vi?</b></h1>
      <section className="text-4xl font-medium text-white w-xs p-4 text-center shadow-[-20px_-20px_0px_0px_rgba(80,80,80,1)] relative bg-dotpastelgreen h-70">
        Bildet av oss
      </section>
      <p className="text-base w-xs mb-30 md:text-2xl md:w-xl">
        Vi er en gruppe engasjerte studenter fra Linjeforeningen Online Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce non quam quis quam vestibulum lobortis eu non est. Sed a scelerisque enim, nec vestibulum augue. 
      </p>
    </div>
  )
}