import { useRef } from "react";
import Card from "./Card";

const AddCard = (props) => {
  const descriptionInput = useRef();

  const submitHandler = (event)=> {
    event.preventDefault();
    if(descriptionInput.current.value.trim() ==='') return;
    props.onSubmit(descriptionInput.current.value);
    descriptionInput.current.value='';
  }
  return (
    <div className="w-1/2 mx-auto mt-6 mb-12">
      <Card bgColor="bg-orange-300" shadow="shadow-2xl">
        <form className="mt-5 px-2" onSubmit={submitHandler}
        >
          <label htmlFor="review" className="mr-2 block mb-2 font-medium text-base text-gray-600">
            review:
          </label>
          <input
            className="rounded-md py-1 px-2 w-5/6 outline-none"
            type="text"
            name="review"
            id="review"
            placeholder="type..."
            ref={descriptionInput}
          ></input>
          <input
            type="submit"
            className="w-1/2 py-1 px-2 rounded-md cursor-pointer block mx-auto mt-14 bg-lime-200"
          ></input>
        </form>
      </Card>
    </div>
  );
};

export default AddCard;
