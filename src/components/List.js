import ListItem from "./ListItem";

const List = (props) => {
  return (
    <ul className=" mr-5 ml-10 mt-12 grid grid-cols-4 gap-x-6">
      {props.reviews.map((review, index) => {
        if (review.description.includes(props.filterData)) {
          return (
            <ListItem
              key={index}
              id={index}
              review={review}
              onDelete={props.onDelete}
            ></ListItem>
          );
        }
      })}
    </ul>
  );
};

export default List;
