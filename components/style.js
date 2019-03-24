
const Style = (props) => (
  <style>
    {`
      .App {
        text-align: center;
      }
      
      .todo-wrapper{
        margin: 20px auto 20px auto;
        width: 500px;
        min-height:600px;
        border: 5px solid rgba(73,286, 145, 1.0);
        padding: 20px;
      } 

      .btn {
        outline: none;
        box-shadow: none;
        border-width: 2px;
        border-radius: 3px;
        border-style: solid;
        padding: 8px;
      }

      .btn-success {
        color: rgb(73, 255, 145);
        border-color: rgb(73, 255, 145);
        background-color: transparent;
      }

      input {
        width: 80%;
        border: none;
        border-color: none;
        border-top: 2px solid rgb(73, 255, 145);
        border-bottom: 2px solid rgb(73, 255, 145);
        margin-right: 10px;
        padding: 5px;
        line-height: 17px;
      }

      input:focus {
        outline: none;
        box-shadow: none;
        border-top: 2px solid rgb(73, 255, 145);
        border-bottom: 2px solid rgb(73, 255, 145);
      }

      .todoWrapper {
        border-bottm: 1px solid #efefef;
        text-align: left;
        margin-bottom: 10px;
      }

      .removeTodo {
        margin-right: 20px;
        margin-bottom: 10px;
        outline: none;
        box-shadow: none;
        border-width: 2px;
        border-radius: 3px;
        border-style: solid;
        padding: 8px;
        color: rgba(203, 20, 32, 0.4);
        border-color: rgba(203, 20, 32, 0.4);
        background-color: transparent;

      }
    `}
  </style>
);

export default Style;