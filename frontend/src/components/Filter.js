import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";


const Filter = () => {
    //console.log([...Array[5]]);
    const [rate, setRate] = useState(4)
    
    const userRating = (e) =>{
        console.log(e);
        setRate(e + 1);
    }
    
    return (
        <div className="filters">
          <span className="title">Filter Products</span>
          <span>
            <Form.Check
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Descending"
              name="group1"
              type="radio"
              id={`inline-2`}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Include Out of Stock"
              name="group1"
              type="checkbox"
              id={`inline-3`}
            />
          </span>
          <span>
            <Form.Check
              inline
              label="Fast Delivery Only"
              name="group1"
              type="checkbox"
              id={`inline-4`}
            />
          </span>
          <span>
            <label style={{ paddingRight: 10 }}>Rating: </label>
            <Rating
              rating={rate} onClick = {userRating}

            //   onClick={(i) =>
            //     productDispatch({
            //       type: "FILTER_BY_RATING",
            //       payload: i + 1,
            //     })
            //   }
              style={{ cursor: "pointer" }}
            />
          </span>
          <Button
            variant="light"
            // onClick={() =>
            //   productDispatch({
            //     type: "CLEAR_FILTERS",
            //   })
            // }
          >
            Clear Filters
          </Button>
        </div>
      );
}

export default Filter;