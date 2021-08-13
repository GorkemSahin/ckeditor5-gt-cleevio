/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js'
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js'
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js'
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js'
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock.js'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js'
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Link from '@ckeditor/ckeditor5-link/src/link.js'
import List from '@ckeditor/ckeditor5-list/src/list.js'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js'
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js'
import Title from '@ckeditor/ckeditor5-heading/src/title.js'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js'
import { AutoVideo } from '@visao/ckeditor5-video'
import VideoBlock from '@visao/ckeditor5-video/src/videoblock'
import VideoUpload from '@visao/ckeditor5-video/src/videoupload'
import VideoInsert from '@visao/ckeditor5-video/src/videoinsert'

class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  AutoLink,
  Autosave,
  BlockQuote,
  Bold,
  Essentials,
  Heading,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  MediaEmbedToolbar,
  Paragraph,
  Strikethrough,
  TextTransformation,
  Title,
  Underline,
  VideoBlock,
  AutoVideo,
  VideoUpload,
  VideoInsert,
]

export default Editor
