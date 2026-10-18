import FaIcon from '@/components/FaIcon'

// Right-aligned app name at the bottom of a popover, for keys that send an app shortcut
export default function AppCaption({app}: {app: string}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right'
      }}
    >
      <span
        style={{
          color: 'var(--nushu-blue)',
          fontSize: 11,
          fontWeight: 'bold'
        }}
      >
        <FaIcon className="fa-regular fa-browser pr-[18px]" color="nushu.blue" />
        {app}
      </span>
    </div>
  )
}
