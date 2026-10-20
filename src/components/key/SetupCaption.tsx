import Link from 'next/link'
import FaIcon from '@/components/FaIcon'
import {setupHref, type SetupItemId} from '@/lib/macosSetup'

// Link at the bottom of a popover, for keys whose shortcut has to be set up first, to its row in
// the macOS setup checklist on Extras
export default function SetupCaption({id}: {id: SetupItemId}) {
  return (
    <div className="flex justify-end px-2 pb-2">
      <Link
        href={setupHref(id)}
        className="text-nushu-magenta inline-flex items-center gap-1.5 text-[11px] font-bold underline-offset-3 hover:underline"
      >
        <FaIcon className="fa-regular fa-wrench-simple" color="nushu.magenta" />
        How to set it up
      </Link>
    </div>
  )
}
