import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  step: 1,
  isSubmitted: false,
};

const ACTIONS = {
  UPDATE_FIELD: "UPDATE_FIELD",
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  SUBMIT_FORM: "SUBMIT_FORM",
  RESET_FORM: "RESET_FORM",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };

    case ACTIONS.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };

    case ACTIONS.PREVIOUS_STEP:
      return {
        ...state,
        step: state.step - 1,
      };

    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        isSubmitted: true,
      };

    case ACTIONS.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_FIELD,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch({ type: ACTIONS.SUBMIT_FORM });
  };

  if (state.isSubmitted) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Registration Successful!</h2>
        <button onClick={() => dispatch({ type: ACTIONS.RESET_FORM })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h2>Multi-Step Registration</h2>

      {state.step === 1 && (
        <>
          <h3>Step 1: Personal Details</h3>
          <input
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
          />
          <br /><br />
          <input
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
          <br /><br />

          <button
            onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}
            disabled={!state.name || !state.email}
          >
            Next
          </button>
        </>
      )}

      {state.step === 2 && (
        <>
          <h3>Step 2: Account Details</h3>
          <input
            name="username"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
          />
          <br /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <br /><br />

          <button onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}>
            Back
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}
            disabled={!state.username || !state.password}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </>
      )}

      {state.step === 3 && (
        <>
          <h3>Step 3: Review & Submit</h3>

          <p><b>Name:</b> {state.name}</p>
          <p><b>Email:</b> {state.email}</p>
          <p><b>Username:</b> {state.username}</p>
          <p><b>Password:</b> ********</p>

          <button
            onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            style={{ marginLeft: "10px" }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
