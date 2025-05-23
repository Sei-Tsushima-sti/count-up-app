import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";

export const ScoreTable = (props) => {
    const { scoreSheet } = props;

    const createScoreRows = () => {
        if (!scoreSheet || !scoreSheet.length) {
            return [];
        }
        const scoreSheetLabel = scoreSheet.map(l => {
            return l.label;
        });

        const rows = [];
        for (let i = 0; i < scoreSheetLabel.length; i += 3) {
            const chunk = scoreSheetLabel.slice(i, i + 3);
            rows.push(chunk);
        }
        return rows;
    }

    // 1. createScoreRows() を一度だけ呼び出し、現在のデータ行とその数を取得
    const actualDataRows = createScoreRows();
    const actualDataRowCount = actualDataRows.length;
    const minTotalRows = 8; // 表示したい最小行数（枠の数）

    return (
        <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table aria-label="simple table" sx={{
                width: '100%',        // テーブル全体の幅を100%に
                tableLayout: 'fixed'  // 列幅を固定レイアウトにするキープロパティ
            }}>
                <TableBody>
                    {/* 実際のデータ行をレンダリング */}
                    {actualDataRows.map((row, index) => (
                        <TableRow
                            key={`row-${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {`R${index + 1}`}
                            </TableCell>
                            {/* rowオブジェクトの構造に合わせてデータを表示 */}
                            < TableCell align="right" > {row[0]}</TableCell>
                            <TableCell align="right">{row[1]}</TableCell>
                            <TableCell align="right">{row[2]}</TableCell>
                        </TableRow>
                    ))}

                    {/* データ行が最小行数に満たない場合、空行で埋める */}
                    {actualDataRowCount < minTotalRows &&
                        Array.from({ length: minTotalRows - actualDataRowCount }).map((_, emptyRowIndex) => (
                            <TableRow
                                key={`empty-row-${actualDataRowCount + emptyRowIndex}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {`R${actualDataRowCount + emptyRowIndex + 1}`} {/* 行番号を継続 */}
                                </TableCell>
                                <TableCell align="right">&nbsp;</TableCell> {/* 空のセル */}
                                <TableCell align="right">&nbsp;</TableCell>
                                <TableCell align="right">&nbsp;</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table >
        </TableContainer >
    );
}

export const ScoreTableSingle = (props) => {
    const { scoreSheet } = props;

    const createScoreRows = () => {
        if (!scoreSheet || !scoreSheet.length) {
            return [];
        }
        const scoreSheetLabel = scoreSheet.map(l => {
            return l.label;
        });

        const rows = [];
        for (let i = 0; i < scoreSheetLabel.length; i += 3) {
            const chunk = scoreSheetLabel.slice(i, i + 3);
            rows.push(chunk);
        }
        rows.splice(0, rows.length - 1);
        return rows;
    }

    // 1. createScoreRows() を一度だけ呼び出し、現在のデータ行とその数を取得
    const actualDataRows = createScoreRows();
    const actualDataRowCount = actualDataRows.length;
    const minTotalRows = 8; // 表示したい最小行数（枠の数）

    return (
        <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table aria-label="simple table" sx={{
                width: '100%',        // テーブル全体の幅を100%に
                tableLayout: 'fixed'  // 列幅を固定レイアウトにするキープロパティ
            }}>
                <TableBody>

                    {/* 実際のデータ行をレンダリング */}

                    {actualDataRows.map((row, index) => (

                        <TableRow

                            key={`row-${index}`}

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >

                            <TableCell component="th" scope="row">

                                {`R${1 + (scoreSheet.length - 1) / 3 | 0}`}

                            </TableCell>

                            {/* rowオブジェクトの構造に合わせてデータを表示 */}

                            <TableCell align="right">{row[0]}</TableCell>

                            <TableCell align="right">{row[1]}</TableCell>

                            <TableCell align="right">{row[2]}</TableCell>

                        </TableRow>

                    ))}

                </TableBody>
            </Table >
        </TableContainer >
    );
}