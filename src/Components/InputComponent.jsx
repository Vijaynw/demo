/* eslint-disable react/prop-types */

const InputComponent = ({dataArr}) => {
    // [[]]
    console.log(dataArr)
    // console.log(inputTypes,placeholder,inputTitle,inputStyle,disable)

  return (
    <>
    <div>Input</div>
    {dataArr.map((el,index)=>{
        return(
            <>
            <input key={index} type={el[0]} placeholder={el[2]} disabled={el[3]} required={el[4]}  maxLength={100} minLength={100}/>{el[1]}
            <hr />
            </>
        )
    })}
     {/* <input  type={dataArr[0]} placeholder={dataArr[2]} required=""  maxLength={100} minLength={100}/> {dataArr[1]}  */}
     
    </>

  )
}
/*
.
     - `customChangeFunction`: A custom function to handle input changes if provided by the parent.
     - `labelStyle`: Style for the label.
     - `errorMessage`: Error message to display if validation fails.
     - `error`: Boolean indicating whether there is an error.
     - If the input type is "select," the parent should provide `options` for the dropdown.
     - If the input type is "currency," the component should display the price in the format `$2,167,089.00`.
5. Validation: */

// select input, radio input, checkbox, text input, number input, currency input, password input
export default InputComponent