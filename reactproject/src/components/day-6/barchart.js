import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis,Label } from "recharts";
const Array = [
  {
  name: "Python",
  student: 13,
  fees: "30$",
  },
  {
  name: "Javascript",
  student: 15,
  fees: "12$",
  },
  {
  name: "PHP",
  student: 5,
  fees: "10$",
  },
  {
  name: "Java",
  student: 10,
  fees: "50$",
  },
  {
  name: "React",
  student: 22 ,
  fee: "10$",
}
]

function Barchart(){
  return (
    <div className="App">
    <h1 style={{ color: "gray" }}>
    Create Charts With{""}
    <strong style={{ color: "black" }}>Coding Drafts</strong>
    </h1>
    <ResponsiveContainer width="50%" aspect={3}>
    <BarChart data={Array} width={400} height={400}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="student" fill="aqua" Label ="language"  /> 
    </BarChart>
    </ResponsiveContainer>
    </div>
    );
    }
export default Barchart