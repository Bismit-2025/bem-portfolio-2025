export interface OurClientsSayProps {
  data: TestimonyProps[] | undefined;
}

export interface TestimonyProps {
  profilePic?: string;
  name: string;
  position: string;
  testimony: string;
}
