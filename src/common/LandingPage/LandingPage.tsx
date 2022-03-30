import React, { useContext } from 'react'
import cn from 'classnames'
import { ILandingPageProps } from './types'
import { ThemeContext } from '../../context/ThemeContext'
import { Button, Icon, Image, Spinner } from '../../components'
import mock_data from './mock_data'

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  const { className } = props

  const {
    theme: {
      landingStyles: {
        baseCls,
        containerCls,
        leftContentCls,
        rightContentCls,
        greetingsCls,
        authorCls,
        borderCls,
        descriptionWrapperCls,
        descriptionCls,
        actionWrapperCls,
      },
    },
  } = useContext(ThemeContext)

  const { greeting, name, id, image, description1, description2, actions } =
    mock_data ?? {}

  const { alt, src } = image ?? {}

  return (
    <section key={id} className={cn('Landing', baseCls, className)}>
      <div className={containerCls}>
        <div className={leftContentCls}>
          <p className={greetingsCls}>{greeting}</p>
          <p className={authorCls}>{name}</p>
          <div className={borderCls} />
          <div className={descriptionWrapperCls}>
            <p className={descriptionCls}>{description1}</p>
            <p className={descriptionCls}>{description2}</p>
          </div>
          <div className={actionWrapperCls}>
            {actions.map((e: any) => (
              <Button
                key={e.id}
                label={e.label}
                color={e.color}
                onClick={e.onClick}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={containerCls}>
        <div className={rightContentCls}>
          <Image
            className='ml-auto'
            border={false}
            background='black'
            alt={alt}
            src={src}
            size='xxl'
            width={550}
            height={620}
            fit='cover'
            ratio='16:9'
            rounded='rounded'
            loader={<Spinner />}
            unloader={<Icon />}
          />
        </div>
      </div>
    </section>
  )
}

export default LandingPage
