const GetDate = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var date = new Date()
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    var day = date.getDay()
    var today = weekday[day] + ', ' + mm + '-' + dd + '-' + yyyy;
    return(today)
}