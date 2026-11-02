class Student{
    static uName="GLA";
    #studentID=101;
    #studentName="Priya";
}
    getDetails()
{
    console.log("Student ID:- "+this.#studentID);
    console.log("Student Name:- "+this.#studentName);
    this.#studentName="";
}