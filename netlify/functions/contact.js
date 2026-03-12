exports.handler=async function(event){
    const formData=JSON.parse(event.body)
    console.log(formData.name)
    console.log(formData.email)
    return {
        statusCode:200,
        body:JSON.stringify({
            message:"Form submitted"
        })
    }

}