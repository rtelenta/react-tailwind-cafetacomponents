import React from "react";
import {
  CcButton,
  CcIcon,
  CcSwitcher,
  CcTextarea,
} from "@cafeta/components-react";

function App() {
  return (
    <div className="max-w-screen-md mx-auto">
      <nav className="bg-secondary lg:bg-primary  p-lg flex">
        <a
          href="/"
          className="bg-neutral-04 block px-md py-xsm rounded-full mr-lg"
        >
          Link 1
        </a>
        <a
          href="/"
          className="bg-neutral-04 block px-md py-xsm rounded-full mr-lg"
        >
          Link 1
        </a>
        <a
          href="/"
          className="bg-neutral-04 block px-md py-xsm rounded-full mr-lg"
        >
          Link 1
        </a>
      </nav>

      <article className="p-xxlg">
        <h1 className="text-heading-01 font-black mb-lg text-neutral-03">
          Titulo
        </h1>
        <p className="mb-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          reiciendis aspernatur hic! Corrupti ratione ut facilis ducimus, aut ea
          tenetur aspernatur minus. Mollitia, porro accusamus blanditiis veniam
          voluptatibus qui exercitationem?
        </p>
      </article>

      <div className="mb-lg flex items-center justify-center">
        <CcButton size="sm" iconName="heart" className="mr-lg">
          Like
        </CcButton>

        <a
          href="/"
          className="bg-secondary hover:bg-secondary-dark text-neutral-04 rounded-full inline-flex items-center justify-center px-md py-xsm font-bold"
        >
          Compartir <CcIcon name="facebook" />
        </a>
      </div>

      <div className="mb-xlg">
        <CcSwitcher />
      </div>

      <div>
        <CcTextarea rich />
      </div>
    </div>
  );
}

export default App;
