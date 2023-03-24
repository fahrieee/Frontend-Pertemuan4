import Hello from "./Hello";

const Main = () => {
    return (
      <main>
        {/**
         * Mengirim props ke component Hello.
         * nama props: name
         */}
        <Hello name="Alifah" />
        <Hello name="Fahri" />
        <Hello name="Ahmad" />
        <Hello name="Jaya" />
        <Hello name="Nana" />
      </main>
    );
  }
  export default Main;