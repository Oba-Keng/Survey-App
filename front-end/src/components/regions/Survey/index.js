import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../actions/posts";

const Survey = () => {
  const [postData, setPostData] = useState({
    surname: "",
    firstNames: "",
    contactNumber: null,
    date: "",
    age: null,

    food: [
      "pizza",
      "pasta",
      "Pap and Wors",
      "Chicken stir fry",
      "Beef stir fry",
      "Other"
    ]
  });

  //allows us to dispatch actions
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createPost(postData));
  };

  // const handleInputChange = event => {
  //   dispatch(createPost(postData));

  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   setPostData({
  //     [name]: value
  //   });
  // };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h4>Take our Survey</h4>
        <h5>Personal Details:</h5>
        <br></br>
        <p>
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            value={postData.surname}
            onChange={e =>
              setPostData({ ...postData, surname: e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="First Names"
            name="firstNames"
            value={postData.firstNames}
            onChange={e =>
              setPostData({ ...postData, firstNames: e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Contact number"
            name="contactNumber"
            value={postData.contactNumber}
            onChange={e =>
              setPostData({ ...postData, contactNumber: e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Date"
            name="date"
            value={postData.date}
            onChange={e => setPostData({ ...postData, date: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={postData.age}
            onChange={e => setPostData({ ...postData, age: e.target.value })}
          />
        </p>
        <p>What is your favourite food? (You can choose more than 1 answer)</p>
        <div>
          <p>
            <input
              label="Pizza"
              type="checkbox"
              value={postData.food[0]}
              name="pizza"
              onChange={e => setPostData({ ...postData, food: e.target.value })}
            />
            Pizza
          </p>
          <p>
            <input
              type="checkbox"
              value={postData.food[0 + 1]}
              name="pasta"
              onChange={e => setPostData({ ...postData, food: e.target.value })}
            />{" "}
            Pasta
          </p>
          <p>
            <input
              type="checkbox"
              value={postData.food[2]}
              name="Pap and Wors"
              onChange={e => setPostData({ ...postData, food: e.target.value })}
            />{" "}
            Pap and Wors
          </p>
          <p>
            <input
              type="checkbox"
              value={postData.food[3]}
              name="Chicken stir fry"
              onChange={e =>
                setPostData({ ...postData, firstNames: e.target.value })
              }
            />{" "}
            Chicken stir fry
          </p>
          <p>
            <input
              type="checkbox"
              value={postData.food[4]}
              name="Beef stir fry"
              onChange={e => setPostData({ ...postData, food: e.target.value })}
            />{" "}
            Beef stir fry
          </p>
          <p>
            <input
              type="checkbox"
              value={postData.food[5]}
              name="other"
              onChange={e => setPostData({ ...postData, food: e.target.value })}
            />{" "}
            Other
          </p>
        </div>
        <br></br>
        On a scale of 1 to 5 indicate whether you strongly agree to strongly
        disagree
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                Strongly Agree<br></br> (1)
              </th>
              <th>
                Agree<br></br>(2)
              </th>
              <th>
                Neutral<br></br>(3)
              </th>
              <th>
                Disagree<br></br>(4)
              </th>
              <th>
                Strongly disagree<br></br>(5)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I like to eat out</td>
              <td>
                <input type="radio" name="out" />
              </td>
              <td>
                {" "}
                <input type="radio" name="out" />
              </td>
              <td>
                <input type="radio" name="out" />
              </td>
              <td>
                <input type="radio" name="out" />
              </td>
              <td>
                <input type="radio" name="out" />
              </td>
            </tr>
            <tr>
              <td>I like to watch movies </td>
              <td>
                <input type="radio" name="movie" />
              </td>
              <td>
                <input type="radio" name="movie" />
              </td>
              <td>
                <input type="radio" name="movie" />
              </td>
              <td>
                <input type="radio" name="movie" />
              </td>
              <td>
                <input type="radio" name="movie" />
              </td>
            </tr>
            <tr>
              <td>I like to watch TV</td>
              <td>
                <input type="radio" name="TV" />
              </td>
              <td>
                <input type="radio" name="TV" />
              </td>
              <td>
                <input type="radio" name="TV" />
              </td>
              <td>
                <input type="radio" name="TV" />
              </td>
              <td>
                <input type="radio" name="TV" />
              </td>
            </tr>
            <tr>
              <td>I like to listen to the radio </td>
              <td>
                <input type="radio" name="listen_radio" />
              </td>
              <td>
                <input type="radio" name="listen_radio" />
              </td>
              <td>
                <input type="radio" name="listen_radio" />
              </td>
              <td>
                <input type="radio" name="listen_radio" />
              </td>
              <td>
                <input type="radio" name="listen_radio" />
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;
