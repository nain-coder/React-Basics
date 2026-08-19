function handleForm(event){
    // event.preventDefault();
    console.log("Form submited");
}

export default function Form(){
    return (
      <>
        <form onSubmit={handleForm}>
          <input placeholder="Write something" />
          <button>Submit</button>
        </form>
      </>
    );
}