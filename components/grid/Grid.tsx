import * as React from "react"
import Row from "./Row"
import Col from "./Col"

export interface IGrid {
  Row: typeof Row
  Col: typeof Col
}
/**
 * 栅格用于便捷搭建结构化的页面布局，常用于有明确功能分区的页面，如 Dashboard、项目卡片等。
 */
const Grid: IGrid = () => <div />

Grid.Row = Row
Grid.Col = Col

export default Grid
