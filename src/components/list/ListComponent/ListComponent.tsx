"use client"
import { useState } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    Pagination,
} from '@mantine/core';
import { CiSearch } from "react-icons/ci";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { HiOutlineSelector } from "react-icons/hi";

interface Column<T> {
    key: keyof T;
    label: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    Title: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IoChevronUp : IoChevronDown) : HiOutlineSelector;
    return (
        <Table.Th>
            <UnstyledButton onClick={onSort}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center>
                        <Icon style={{ width: rem(16), height: rem(16) }} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData<T>(data: T[], search: string, columns: Column<T>[]) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        columns.some((column) => {
            const value = item[column.key];
            if (Array.isArray(value)) {
                return value.some((val) => val.toString().toLowerCase().includes(query));
            }
            if (typeof value === 'string') {
                return value.toLowerCase().includes(query);
            }
            return false;
        })
    );
}

function sortData<T>(
    data: T[],
    payload: { sortBy: keyof T | null; reversed: boolean; search: string },
    columns: Column<T>[]
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search, columns);
    }

    const sorted = [...data].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return payload.reversed
                ? bValue.localeCompare(aValue)
                : aValue.localeCompare(bValue);
        }
        return 0;
    });

    return filterData(sorted, payload.search, columns);
}

export function ListComponent<T>({ data, columns, Title }: DataTableProps<T>) {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof T | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    // Pagination state
    const [activePage, setPage] = useState(1);
    const rowsPerPage = 10;

    const setSorting = (field: keyof T) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }, columns));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }, columns));
    };

    // Paginate the sorted data
    const paginatedData = sortedData.slice(
        (activePage - 1) * rowsPerPage,
        activePage * rowsPerPage
    );

    const rows = paginatedData.map((row, index) => (
        <Table.Tr key={index}>
            {columns.map((column) => (
                <Table.Td key={column.key as string}>
                    {Array.isArray(row[column.key])
                        ? (row[column.key] as any[]).join(', ')
                        : row[column.key]?.toString()}
                </Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <div className='w-full flex justify-between items-center mb-8 top-0 sticky left-0'>
                <div className="flex items-center justify-between">
                    <h1 className="hidden md:block text-lg font-semibold">{Title}</h1>
                </div>
                <TextInput
                    placeholder="Search by any field"
                    mb="md"
                    leftSection={<CiSearch style={{ width: rem(16), height: rem(16) }} />}
                    value={search}
                    onChange={handleSearchChange}
                    className=' w-[max-content]'
                />
            </div>
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Thead>
                    <Table.Tr>
                        {columns.map((column) => (
                            <Th
                                key={column.key as string}
                                sorted={sortBy === column.key}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting(column.key)}
                            >
                                {column.label}
                            </Th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((row: any) => (
                            <Table.Tr key={row.id}>
                                <Table.Td className='flex items-center gap-2'>
                                  { row.avatar  &&
                                    <img
                                        src={row.avatar}
                                        alt={`${row.name}'s avatar`}
                                        className='object-cover'
                                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                    />}
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-base font-semibold'>{row.name}</span>
                                        <span className='text-base text-slate-400'>{row.email}</span>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <span className='text-base'>{row.id}</span>
                                </Table.Td>
                                {row.students &&
                                    <Table.Td>
                                        <span className='text-base'>{row.students.join(', ')}</span>
                                    </Table.Td>
                                }
                                {row.subjects &&
                                    <Table.Td>
                                        <span className='text-base'>{row.subjects.join(', ')}</span>
                                    </Table.Td>
                                }
                                {row.classes &&
                                    <Table.Td>
                                        <span className='text-base'>{row.classes.join(', ')}</span>
                                    </Table.Td>}
                                {row.grade &&
                                    <Table.Td>
                                        <span className='text-base'>{row.grade}</span>
                                    </Table.Td>
                                }
                                {row.class &&
                                    <Table.Td>
                                        <span className='text-base'>{row.class}</span>
                                    </Table.Td>}
                                <Table.Td>
                                    <span className='text-base'>{row.email}</span>
                                </Table.Td>
                                <Table.Td>
                                    <span className='text-base'>{row.address}</span>
                                </Table.Td>
                                <Table.Td>
                                    <span className='text-base'>{row.phone}</span>
                                </Table.Td>
                            </Table.Tr>
                        ))
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={columns.length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>

            {/* Pagination */}
            <div className='w-full flex justify-center items-center my-6'>
                <Pagination
                    value={activePage}
                    onChange={setPage}
                    total={Math.ceil(sortedData.length / rowsPerPage)}
                    mt="md"
                    color='#330c4f'
                />
            </div>

        </ScrollArea>
    );
}