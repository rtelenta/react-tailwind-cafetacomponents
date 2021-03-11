import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  CcButton,
  CcIcon,
  CcInput,
  CcSwitcher,
  CcTextarea,
} from "@cafeta/components-react";

function App() {
  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onTouched'
  });

  const onSubmit = (data : any) => {
    console.log(data)
  };

  useEffect(() => {
    register('description', { required: 'Este campo es obligatorio', maxLength: {value: 150, message: 'No mas de 150'} });
  }, [register]);

  const onUpdateInput = (key: string) => {
    return (e: any) => {
      setValue(key, e.target.value);
    }
  }

  const onUpdateTextarea = (key: string) => {
    return (e: any) => {
      setValue(key, e.detail);
    }
  }
  console.log(errors)
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <CcInput 
            name='title'
            helperText={errors?.title?.message}
            inputRef={register({ required: 'Este campo es obligatorio', minLength: {value: 10, message: 'No mas de 10'} })}
            error={'title' in errors}
            onInput={onUpdateInput('title')} 
            label='Titulo'/>
          <CcTextarea 
            name='description'
            autoGrow={true}
            helperText={errors?.description?.message}
            error={'description' in errors}
            onChangeText={onUpdateTextarea('description')} 
            label='Descripcion'/>
          <CcButton type="submit" className='mt-xxlg'>Guardar</CcButton>
        </form>
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
