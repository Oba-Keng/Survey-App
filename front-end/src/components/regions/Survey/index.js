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
    ],

    eat: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"],
    movies: [
      "stronglyAgree",
      "Agree",
      "Neutral",
      "Disagree",
      "stronglyDisagree"
    ],
    tv: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"],
    radio: ["stronglyAgree", "Agree", "Neutral", "Disagree", "stronglyDisagree"]
  });

  //allows us to dispatch actions
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createPost(postData));
  };

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
              value={postData.food[1]}
              name="pasta"
              onChange={e => setPostData({ ...postData, food: e.target.value })}
            />
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
              onChange={e => setPostData({ ...postData, food: e.target.value })}
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
                <input
                  type="radio"
                  value={postData.eat[0]}
                  name="eatOut"
                  onChange={e =>
                    setPostData({ ...postData, eat: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.eat[1]}
                  name="eatOut"
                  onChange={e =>
                    setPostData({ ...postData, eat: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.eat[2]}
                  name="eatOut"
                  onChange={e =>
                    setPostData({ ...postData, eat: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.eat[3]}
                  name="eatOut"
                  onChange={e =>
                    setPostData({ ...postData, eat: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.eat[4]}
                  name="eatOut"
                  onChange={e =>
                    setPostData({ ...postData, eat: e.target.value })
                  }
                />{" "}
              </td>
            </tr>
            <tr>
              <td>I like to watch movies </td>
              <td>
                <input
                  type="radio"
                  value={postData.movies[0]}
                  name="movie"
                  onChange={e =>
                    setPostData({ ...postData, movies: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.movies[1]}
                  name="movie"
                  onChange={e =>
                    setPostData({ ...postData, movies: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.movies[2]}
                  name="movie"
                  onChange={e =>
                    setPostData({ ...postData, movies: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.movies[3]}
                  name="movie"
                  onChange={e =>
                    setPostData({ ...postData, movies: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.movies[4]}
                  name="movie"
                  onChange={e =>
                    setPostData({ ...postData, movies: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>I like to watch TV</td>
              <td>
                <input
                  type="radio"
                  value={postData.tv[0]}
                  name="tv"
                  onChange={e =>
                    setPostData({ ...postData, tv: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.tv[1]}
                  name="tv"
                  onChange={e =>
                    setPostData({ ...postData, tv: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.tv[2]}
                  name="tv"
                  onChange={e =>
                    setPostData({ ...postData, tv: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.tv[3]}
                  name="tv"
                  onChange={e =>
                    setPostData({ ...postData, tv: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.tv[4]}
                  name="tv"
                  onChange={e =>
                    setPostData({ ...postData, tv: e.target.value })
                  }
                />{" "}
              </td>
            </tr>
            <tr>
              <td>I like to listen to the radio </td>
              <td>
                <input
                  type="radio"
                  value={postData.radio[0]}
                  name="radio"
                  onChange={e =>
                    setPostData({ ...postData, radio: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.radio[1]}
                  name="radio"
                  onChange={e =>
                    setPostData({ ...postData, radio: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.radio[2]}
                  name="radio"
                  onChange={e =>
                    setPostData({ ...postData, radio: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.radio[3]}
                  name="radio"
                  onChange={e =>
                    setPostData({ ...postData, radio: e.target.value })
                  }
                />{" "}
              </td>
              <td>
                <input
                  type="radio"
                  value={postData.radio[4]}
                  name="radio"
                  onChange={e =>
                    setPostData({ ...postData, radio: e.target.value })
                  }
                />{" "}
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
