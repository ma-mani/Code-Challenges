import { volumes } from "@/resources/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

import Link from "next/link";

import ArrLeft from "../../icons/arrow-left.svg";
import ArrRight from "../../icons/arrow-right.svg";
import ChevronLeft from "../../icons/chevron-left.svg";

import styled from "styled-components";

const VolumeDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // const volume = volumes.find((volume) => volume.slug === slug);

  const volumesIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumesIndex];
  const prevVolumes = volumes[volumesIndex - 1];
  const nextVolumes = volumes[volumesIndex + 1];

  if (!volume) {
    return null;
  }

  return (
    <WrapperVolumes>
      <HeaderWrapper>
        <StyledLinkChevron href="/volumes">
          <ChevronLeft /> All Volumes
        </StyledLinkChevron>
        <H1>{volume.title}</H1>
        <Description>{volume.description}</Description>
      </HeaderWrapper>
      <BookWrapper $bgcolor={volume.color}>
        <StyledUl>
          {volume.books.map((book) => {
            return (
              <li key={book.title}>
                <p>Ordinal: {book.ordinal}</p>
                <strong>Title: {book.title}</strong>
              </li>
            );
          })}
        </StyledUl>
        <Image src={`${volume.cover}`} height={230} width={140} alt="Teil1" />
      </BookWrapper>
      {prevVolumes ? (
        <StyledLinkLeft href={`/volumes/${prevVolumes.slug}`}>
          <ArrLeft />
          <PrevVolumeText>
            <span>Prev:</span>
            <span>{prevVolumes.title}</span>
          </PrevVolumeText>
        </StyledLinkLeft>
      ) : null}
      {nextVolumes ? (
        <StyledLinkRight href={`/volumes/${nextVolumes.slug}`}>
          <NextVolumeText>
            <span>Next Volume:</span> <span>{nextVolumes.title} </span>
          </NextVolumeText>
          <ArrRight />
        </StyledLinkRight>
      ) : null}
    </WrapperVolumes>
  );
};

export default VolumeDetail;

const WrapperVolumes = styled.div``;

const StyledLinkChevron = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem;
`;

const H1 = styled.h1`
  font: var(--font-headline-2);
`;

const Description = styled.p`
  font-size: 1.4rem;
`;

const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ $bgcolor }) => $bgcolor};
  /* background: linear-gradient(
    to right,
    #242c31,
    ${({ $bgcolor }) => ($bgcolor ? $bgcolor : gray)}
  ); */
  padding: 3.2rem;
  color: #fff;
`;

const StyledUl = styled.ul`
  list-style: none;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const StyledLinkRight = styled(Link)`
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  padding: 3.2rem;
`;

const NextVolumeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLinkLeft = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 3.2rem 3.2rem 0rem 3.2rem;
`;

const PrevVolumeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
