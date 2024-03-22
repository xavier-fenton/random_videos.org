export type users = user[]

export type userVideos = {
  id: number
  title: string
  video_file: string
  testkey: number
}

export type user = {
  id: number
  username: string
  isUser: boolean
  userVideos: userVideos[]
}

export const TestUsers: users = [
    {
      id: 1,
      username: 'admin_user',
      isUser: true,
      userVideos: [
        {
          id: 1,
          title: 'random_video',
          video_file: '/2024-01-30 16-08-03.mp4',
          testkey: 101
        },
        {
          id: 2,
          title: 'random_video_2',
          video_file: '/2022-09-20 21-05-09.mp4',
          testkey: 202

        },
      ],
    },
    {
      id: 2,
      username: 'admin_user2',
      isUser: true,
      userVideos: [
        {
          id: 1,
          title: 'random_video',
          video_file: '/vlc-record-2023-06-08-14h12m12s-2023-06-08 13-45-02.mp4-.mp4',
          testkey: 303

        },
      ],
    },
    {
      id: 3,
      username: 'admin_user3',
      isUser: true,
      userVideos: [
        {
          id: 1,
          title: 'random_video',
          video_file: '/2024-02-26 18-07-03.mp4',
          testkey: 404

        },
        {
          id: 2,
          title: 'random_video_2',
          video_file: '/poth_1.mp4',
          testkey: 505

        },
      ],
    },
  ]