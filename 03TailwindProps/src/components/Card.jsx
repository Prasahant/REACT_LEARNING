import React from 'react'

const Card = (props) => {
  console.log("props",props)
  return (
    <div className="mt-5 border-amber-600">
      <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qiwV6L-gA8Fn9ioLuvZNmkSnuM-jOSdVWbLFlHNhLg&s=10" alt="dog" />
      <div className="mt-4">
        <div className="text-xs font-bold text-sky-500"></div>
        <div className="mt-1 font-bold text-red-700">
          <a href="https://www.google.com/imgres?q=jpg%20image%20link&imgurl=https%3A%2F%2Fi0.wp.com%2Fyeatphotos.com%2Fwp-content%2Fuploads%2F2025%2F01%2FDOG-PORTRAIT-DAY-2025-FURRY-FRIENDS-FEBRUARY.jpg%3Ffit%3D2550%252C3300%26ssl%3D1&imgrefurl=https%3A%2F%2Fyeatphotos.com%2Fdog-events%2F&docid=VkJoCv4DkcxQhM&tbnid=eduPHcIXNA0B3M&vet=12ahUKEwjT2dS73dKXAxUM3TgGHYxFK-wQnPAOegQIMRAA..i&w=2550&h=3300&hcb=2&ved=2ahUKEwjT2dS73dKXAxUM3TgGHYxFK-wQnPAOegQIMRAA" className="hover:underline">
            click me
          </a>
        </div>
        <div className="mt-2 text-sm text-red-600">$900</div>
      </div>
    </div>
  )
}

export default Card