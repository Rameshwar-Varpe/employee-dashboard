import { useState } from "react";
import Appbar from "./Appbar.jsx";
import EmployeeList from './EmployeeList.jsx';
import ShowEmployee from './ShowForm.jsx';
import AddEmployee from './AddEmployee.jsx';
import SearchBar from "./SearchBar";

import Sort from "./Sort";

import { Button, Stack } from "@mui/material";

function Dashboard() {
    const initialEmployees = [
        { ID: 1, name: "Rameshwar Varpe", designation: "Quality Analyst", department: "Quality Assurance", salary: 55000 },
        { ID: 2, name: "Pratik Pawase", designation: "Tester", department: "IT Department", salary: 30000 },
        { ID: 3, name: "Shubham Thorat", designation: "Sales", department: "Sales", salary: 25000 },
        { ID: 4, name: "Akash Kharat", designation: "Financial Manager", department: "Finance", salary: 40000 },
        { ID: 5, name: "Sagar Varpe", designation: "Sales", department: "Marketing", salary: 15000 },
        { ID: 6, name: "Pratik Pawase", designation: "Developer", department: "IT Department", salary: 45000 },
        { ID: 7, name: "Sachin Thorat", designation: "Sales", department: "Sales", salary: 15000 },
        { ID: 8, name: "Gaurav Pansare", designation: "Financial Manager", department: "Finance", salary: 44000 },
    ];

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [employees, setEmployees] = useState(initialEmployees);
    const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const updateEmployee = (updatedEmployee) => {
        if (updatedEmployee.name && updatedEmployee.salary && updatedEmployee.designation && updatedEmployee.department) {
            const index = employees.findIndex(employee => employee.ID === updatedEmployee.ID);

            if (index !== -1) {
                const updatedEmployees = [...employees];
                updatedEmployees[index] = updatedEmployee;
                setEmployees(updatedEmployees);
            }
        }
    }

    const setNewEmployee = (employee) => {
        if (employee) {
            setEmployees((prevEmployees) => [...prevEmployees, employee])
        }
    }

    const handleDelete = (deletableEmployee) => {
        const index = filtered.findIndex(employee => employee.ID === deletableEmployee.ID);

        if(index !== -1){
            filtered.splice(index, 1);
        }
    }

    //search from anywhere
    // const filtered = searchTerm.length > 0
    //     ? employees.filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
    //     : employees;

    //search from only start of the word
    const filtered = searchTerm.length > 0
        ? employees.filter((employee) => {
            return employee.name.toLowerCase().split(' ').some(word => word.startsWith(searchTerm.toLowerCase()));
        })
        : employees;

    const handleSort = (order) => {
        const sorted = [...employees];
        sorted.sort((a, b) => {
            if (order === "asc") {
                return a.name.localeCompare(b.name);
            } else if (order === "desc") {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });
        setEmployees(sorted);
    }

    const handleAddEmployeeClick = () => {
        setShowAddEmployeeForm(true);
        setShowForm(false);
    }

    return (
        <>
            <Stack>
                <Stack>
                    <Appbar employees={employees} />
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={"22px"}
                    marginTop={"10px"}
                    marginLeft={"10px"}
                >
                    <Button
                        variant="contained"
                        onClick={handleAddEmployeeClick}
                        size="medium"
                        sx={{
                            height: "6%",
                            marginTop: "50vh"
                        }}
                    >
                        Add Employee
                    </Button>
                    <Sort employees={filtered}
                        setEmployees={setEmployees}
                        handleSort={handleSort}
                    />
                </Stack>
                <Stack
                    direction={"column"}
                    justifyContent={"flex-end"}
                    margin={"10px"}
                >
                    <SearchBar
                        employees={filtered}
                        setEmployees={setEmployees}
                        setSearchTerm={setSearchTerm} />
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={30}
                >
                    <Stack>
                        <EmployeeList
                            employees={filtered}
                            selectedEmployee={selectedEmployee}
                            setSelectedEmployee={setSelectedEmployee}
                            setShowForm={setShowForm}
                            showForm={showForm}
                        />
                    </Stack>

                    <Stack>
                        {
                            showForm ?
                                (
                                    () => setShowAddEmployeeForm(false),
                                    <ShowEmployee
                                        selectedEmployee={selectedEmployee}
                                        setSelectedEmployee={setSelectedEmployee}
                                        updateEmployee={updateEmployee}
                                        showForm={showForm}
                                        setShowForm={setShowForm}
                                        handleDelete={handleDelete}
                                    />
                                )
                                :
                                <></>
                        }

                        {
                            showAddEmployeeForm ?
                                !showForm ?
                                    (
                                        <AddEmployee
                                            employees={filtered}
                                            setShowForm={setShowForm}
                                            setNewEmployee={setNewEmployee}
                                            setShowAddEmployeeForm={setShowAddEmployeeForm}
                                        />
                                    )
                                    :
                                    <></>
                                :
                                <></>
                        }
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
export default Dashboard;