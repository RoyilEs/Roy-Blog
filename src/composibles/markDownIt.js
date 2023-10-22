import markdown from "markdown-it";

const md = new markdown()

const markDown = (content) => {
    const reslut = md.render(content)
    return reslut
}

export default markDown