import "./TextArea.css"
export function TextArea () {
    return (
            <input type={'textarea'}
                   placeholder={'Write a message...'}
                   className={"app-input"} />
    );
}