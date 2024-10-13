import * as icons from "react-icons/ri"

function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
    iconName="",
  }) 
  {
    const Icon=icons[iconName];
    return (
      <>
      <button
        disabled={disabled}
        onClick={onclick}
        
        className={`flex items-center ${
          outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
        } cursor-pointer gap-x-2 rounded-md py-2 font-semibold text-richblack-900 ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-yellow-50 "} px-3 flex flex-row gap-3 items-center`}>{text}{children}</span>
            
            
          </>
        ) : (
          <div className="px-2 flex flex-row gap-[6px] items-center">{text}{iconName && <Icon/>}</div>
        )}
      </button>
      </>
    )
  }

export default IconBtn