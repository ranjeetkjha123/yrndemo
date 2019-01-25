import React,{Component} from "react";

class InputText extends Component{
    render(){
        return(
            <input
            name={this.props.name}
            id={this.props.name}
            type="text"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            maxLength={this.props.maxLength}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onKeyUp={this.props.onKeyUp}
            onKeyPress={this.props.onKeyPress}
            readOnly={this.props.readOnly}
            className={(this.props.iserror == true ? "jp-inline-error" : "")}
            /> 
        )
    }
  }
  
  export default InputText;
  