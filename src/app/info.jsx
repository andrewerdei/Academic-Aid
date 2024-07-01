/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6UUCNKBS4EY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [courses, setCourses] = useState([
    {
      name: "",
      credits: 0,
      professor: "",
      professorEmail: "",
      grading: [
        { name: "Assignments", weight: 30 },
        { name: "Midterm", weight: 30 },
        { name: "Final", weight: 40 },
      ],
      isMinimized: false,
    },
  ])
  const [studentName, setStudentName] = useState("")
  const [studentSchool, setStudentSchool] = useState("")
  const [term, setTerm] = useState("")
  const [year, setYear] = useState("")
  const addCourse = () => {
    setCourses([
      ...courses,
      {
        name: "",
        credits: 0,
        professor: "",
        professorEmail: "",
        grading: [
          { name: "Assignments", weight: 30 },
          { name: "Midterm", weight: 30 },
          { name: "Final", weight: 40 },
        ],
        isMinimized: false,
      },
    ])
  }
  const removeCourse = (index) => {
    const updatedCourses = [...courses]
    updatedCourses.splice(index, 1)
    setCourses(updatedCourses)
  }
  const updateCourse = (index, field, value) => {
    const updatedCourses = [...courses]
    updatedCourses[index][field] = value
    setCourses(updatedCourses)
  }
  const updateGradingCategory = (courseIndex, categoryIndex, field, value) => {
    const updatedCourses = [...courses]
    updatedCourses[courseIndex].grading[categoryIndex][field] = value
    setCourses(updatedCourses)
  }
  const addGradingCategory = (courseIndex) => {
    const updatedCourses = [...courses]
    updatedCourses[courseIndex].grading.push({
      name: "",
      weight: 0,
    })
    setCourses(updatedCourses)
  }
  const removeGradingCategory = (courseIndex, categoryIndex) => {
    const updatedCourses = [...courses]
    updatedCourses[courseIndex].grading.splice(categoryIndex, 1)
    setCourses(updatedCourses)
  }
  const toggleCourseMinimize = (index) => {
    const updatedCourses = [...courses]
    updatedCourses[index].isMinimized = !updatedCourses[index].isMinimized
    setCourses(updatedCourses)
  }
  const generatePlanner = () => {
    console.log("Generating planner:", {
      courses,
      studentName,
      studentSchool,
      term,
      year,
    })
  }
  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16">
      <h1 className="text-3xl font-bold mb-8">Academic Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Student Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="studentName">Name</Label>
              <Input id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="studentSchool">School</Label>
              <Input id="studentSchool" value={studentSchool} onChange={(e) => setStudentSchool(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="term">Term</Label>
              <Input id="term" value={term} onChange={(e) => setTerm(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Courses</h2>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 ${
                course.isMinimized ? "max-h-16 overflow-hidden" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`course-${index}-name`}>Course Name</Label>
                    <Input
                      id={`course-${index}-name`}
                      value={course.name}
                      onChange={(e) => updateCourse(index, "name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`course-${index}-credits`}>Credits</Label>
                    <Input
                      id={`course-${index}-credits`}
                      type="number"
                      value={course.credits}
                      onChange={(e) => updateCourse(index, "credits", parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => toggleCourseMinimize(index)}>
                  <Minimize2Icon className="w-4 h-4" />
                </Button>
              </div>
              {!course.isMinimized && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`course-${index}-professor`}>Professor</Label>
                      <Input
                        id={`course-${index}-professor`}
                        value={course.professor}
                        onChange={(e) => updateCourse(index, "professor", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`course-${index}-professorEmail`}>Professor Email</Label>
                      <Input
                        id={`course-${index}-professorEmail`}
                        value={course.professorEmail}
                        onChange={(e) => updateCourse(index, "professorEmail", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2">Grading Rubric</h3>
                    {course.grading.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                        <div>
                          <Label htmlFor={`course-${index}-grading-${categoryIndex}-name`}>Category</Label>
                          <Input
                            id={`course-${index}-grading-${categoryIndex}-name`}
                            value={category.name}
                            onChange={(e) => updateGradingCategory(index, categoryIndex, "name", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`course-${index}-grading-${categoryIndex}-weight`}>Weight</Label>
                          <Input
                            id={`course-${index}-grading-${categoryIndex}-weight`}
                            type="number"
                            value={category.weight}
                            onChange={(e) =>
                              updateGradingCategory(index, categoryIndex, "weight", parseInt(e.target.value))
                            }
                          />
                        </div>
                        <div className="flex items-center justify-end">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeGradingCategory(index, categoryIndex)}
                          >
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={() => addGradingCategory(index)}>
                      Add Category
                    </Button>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="ghost" size="icon" onClick={() => removeCourse(index)}>
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button variant="outline" onClick={addCourse}>
            Add Course
          </Button>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button onClick={generatePlanner}>Generate Planner</Button>
      </div>
    </div>
  )
}

function Minimize2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="14" x2="21" y1="10" y2="3" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  )
}


function MinimizeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}