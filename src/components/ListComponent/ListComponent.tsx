"use client";
import { useState, useEffect } from "react";
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
} from "@mantine/core";
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
  style?: React.CSSProperties; // Ajout de la propriété style

}

function Th({ children, reversed, sorted, onSort, style }: ThProps) {
  const Icon = sorted ? (reversed ? IoChevronUp : IoChevronDown) : HiOutlineSelector;
  return (
    <Table.Th style={style}> 
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


export function ListComponent<T>({ data, columns, Title }: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  // Pagination state
  const [activePage, setPage] = useState(1);
  const rowsPerPage = 10;

  // Filter and sort data
  useEffect(() => {
    const filteredData = filterData(data, search);
    const sortedFilteredData = sortData(filteredData);
    setSortedData(sortedFilteredData);
  }, [data, search, sortBy, reverseSortDirection]);

  // Function to filter data based on search input
  const filterData = (data: T[], search: string) => {
    if (!search) return data;
    return data.filter((item: any) =>
      Object.values(item)
        .some(value => String(value).toLowerCase().includes(search.toLowerCase()))
    );
  };

  // Function to sort data based on selected column
  const sortData = (data: T[]) => {
    if (!sortBy) return data;
    return [...data].sort((a, b) => {
      const order = reverseSortDirection ? -1 : 1;
      if (a[sortBy] < b[sortBy]) return -1 * order;
      if (a[sortBy] > b[sortBy]) return 1 * order;
      return 0;
    });
  };

  // Paginate the sorted data
  const paginatedData = sortedData?.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    setPage(1); // Reset to first page on search
  };

  const setSorting = (columnKey: keyof T) => {
    const isAsc = sortBy === columnKey && !reverseSortDirection;
    setSortBy(columnKey);
    setReverseSortDirection(isAsc);
  };

  return (
    <ScrollArea>
      <div className="w-full flex justify-between items-center mb-8 top-0 sticky left-0">
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">{Title}</h1>
        </div>
        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<CiSearch style={{ width: rem(16), height: rem(16) }} />}
          value={search}
          onChange={handleSearchChange}
          className="w-[max-content]"
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
                style={column.key === "ID" ? { width: '40px' } : undefined} // Condition correcte pour appliquer le style
              >
                {column.label}
              </Th>
            ))}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {paginatedData?.length > 0 ? (
            paginatedData.map((row: any) => (
              <Table.Tr key={row.id}>
                {row.name && (
                  <Table.Td className="flex items-center gap-2">
                    {row.avatar && (
                      <img
                        src={row.avatar}
                        alt={`${row.name}'s avatar`}
                        className="object-cover"
                        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                      />
                    )}
                    <div className="flex flex-col gap-0">
                      <span className="text-base font-semibold">{row.name}</span>
                      {row.email && (
                        <span className="text-base text-slate-400
                        ">{row.email}</span>
                      )}
                    </div>
                  </Table.Td>
                )}
                {row.student && (
                  <Table.Td>
                    <span className="text-base font-medium ">{row.student}</span>
                  </Table.Td>
                )}
                {row.title && (
                  <Table.Td>
                    <span className="text-base font-medium">{row.title}</span>
                  </Table.Td>
                )}
                {row.classeName && (
                  <Table.Td>
                    <span className="text-base">{row.classeName}</span>
                  </Table.Td>
                )}
                {row.subjectName && (
                  <Table.Td>
                    <span className="text-base">{row.subjectName}</span>
                  </Table.Td>
                )}
                <Table.Td >
                  <span className="text-base" >{row.id}</span>
                </Table.Td>
                {row.capacity && (
                  <Table.Td>
                    <span className="text-base">{row.capacity}</span>
                  </Table.Td>
                )}
                {row.students && (
                  <Table.Td>
                    <span className="text-base">{row.students.join(", ")}</span>
                  </Table.Td>
                )}
                {row.subjects && (
                  <Table.Td>
                    <span className="text-base">{row.subjects.join(", ")}</span>
                  </Table.Td>
                )}
                {row.subject && (
                  <Table.Td>
                    <span className="text-base">{row.subject}</span>
                  </Table.Td>
                )}
                {row.classes && (
                  <Table.Td>
                    <span className="text-base">{row.classes.join(", ")}</span>
                  </Table.Td>
                )}
                {row.grade && (
                  <Table.Td>
                    <span className="text-base">{row.grade}</span>
                  </Table.Td>
                )}
                {row.CoursSubject && (
                  <Table.Td>
                    <span className="text-base">{row.CoursSubject}</span>
                  </Table.Td>
                )}
                {row.class && (
                  <Table.Td>
                    <span className="text-base">{row.class}</span>
                  </Table.Td>
                )}
                {row.supervisor && (
                  <Table.Td>
                    <span className="text-base font-medium">{row.supervisor}</span>
                  </Table.Td>
                )}
                {row.teacher && (
                  <Table.Td>
                    <span className="text-base font-medium">{row.teacher}</span>
                  </Table.Td>
                )}
                {row.email && (
                  <Table.Td>
                    <span className="text-base">{row.email}</span>
                  </Table.Td>
                )}
                {row.address && (
                  <Table.Td>
                    <span className="text-base">{row.address}</span>
                  </Table.Td>
                )}
                {row.phone && (
                  <Table.Td>
                    <span className="text-base">{row.phone}</span>
                  </Table.Td>
                )}
                {row.date && (
                  <Table.Td>
                    <span className="text-base font-medium">{row.date}</span>
                  </Table.Td>
                )}
                {row.dueDate && (
                  <Table.Td>
                    <span className="text-base">{row.dueDate}</span>
                  </Table.Td>
                )}
                {row.startTime && (
                  <Table.Td>
                    <span className="text-base">{row.startTime}</span>
                  </Table.Td>
                )}
                {row.endTime && (
                  <Table.Td>
                    <span className="text-base">{row.endTime}</span>
                  </Table.Td>
                )}
                {row.type && (
                  <Table.Td>
                    <span className="text-base">{row.type}</span>
                  </Table.Td>
                )}
                {row.score && (
                  <Table.Td>
                    <span className="text-base">{row.score}</span>
                  </Table.Td>
                )}
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
      <div className="w-full flex justify-center items-center my-6">
        <Pagination
          value={activePage}
          onChange={setPage}
          total={Math.ceil(sortedData.length / rowsPerPage)}
          color="#330c4f"
        />
      </div>
    </ScrollArea>
  );
}
