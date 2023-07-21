import { GridColDef } from "@mui/x-data-grid"
import "./add.scss";
type Props={
slug:string,
columns:GridColDef[],
setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const Add=(props:Props)=>{

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        //Add new user by API call
    }

    return <div className="add">
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)} >X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit} >
                {props.columns.filter((item=>item.field !=="img" && item.field !=="id")).map((column)=>(
                    <div className="item">
                        <label >{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}

                <button>Submit</button>
            </form>
        </div>
    </div>
}

export default Add;