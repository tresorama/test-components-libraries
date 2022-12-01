import { Button } from "../button/button";
import { IconButton } from "../button/icon-button";
import { PlayIcon } from "../icons";

export const ComponentsDemo = () => (
  <>
    <div className="flex-gap-2 items-center">
      <Button text="Press" size="sm" />
      <Button text="Press" leftIcon={<PlayIcon />} size="sm" />
      <IconButton icon={<PlayIcon />} size="sm" />
    </div>
    <div className="mt-2 flex-gap-2 items-center">
      <Button text="Press" size="md" />
      <Button text="Press" leftIcon={<PlayIcon />} size="md" />
      <IconButton icon={<PlayIcon />} size="md" />
    </div>
    <div className="mt-2 flex-gap-2 items-center">
      <Button text="Press" size="lg" />
      <Button text="Press" leftIcon={<PlayIcon />} size="lg" />
      <IconButton icon={<PlayIcon />} size="lg" />
    </div>
  </>
);