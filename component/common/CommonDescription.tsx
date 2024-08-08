/* eslint-disable react/no-array-index-key */

import React, { PropsWithChildren, CSSProperties } from 'react';
import { IRow } from './IRow';
import { HrefTargetBlank } from '.';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => (
            <React.Fragment key={`${description.content}-${descIndex}`}>
              <Description
                description={description}
                key={`description-${description.content}-${descIndex}`}
              />
              {description.descriptions ? (
                <DescriptionRecursion
                  descriptions={description.descriptions}
                  key={`description-recursion-${description.content}-${descIndex}`}
                />
              ) : (
                ''
              )}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀

function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <React.Fragment key={`${description.content}-${index}`}>
          <Description
            description={description}
            key={`description-${description.content}-${index}`}
          />
          {description.descriptions ? (
            <DescriptionRecursion
              descriptions={description.descriptions}
              key={`description-recursion-${description.content}-${index}`}
            />
          ) : (
            ''
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight } = description;

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />{' '}
          <img src={postImage} alt={postImage} style={{ maxWidth: '70%', display: 'block' }} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content}{' '}
          <img src={postImage} alt={postImage} style={{ maxWidth: '70%', display: 'block' }} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>{content}</li>
      </>
    );
  })();

  return component;
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Noto Sans KR Weights: 300, 400, 500, 700
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  // BOLD: 700,
  BOLD: 500,
};
