let id = 5
const form = document.querySelector("form")
const tableBody = document.querySelector("table tbody")
const rowTemplate = `
<tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{telegram}</td>
    <td>{group}</td>
    <td>{gender}</td>
</tr>`
const formatString = (template, args) => {
    Object.getOwnPropertyNames(args).forEach(element => {
        template = template.replace(`{${element}}`, args[element])
    });
    return template
}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    data = Object.fromEntries(new FormData(event.target))
    id += 1
    console.log(formatString(rowTemplate, Object.assign(data, { id: id })))
    tableBody.innerHTML += formatString(rowTemplate, Object.assign(data, { id: id }))
})
